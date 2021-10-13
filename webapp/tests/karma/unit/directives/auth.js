describe('auth directive', () => {

  'use strict';

  let compile;
  let scope;
  let Auth;

  beforeEach(() => {
    module('adminApp');
    module('inboxDirectives');
    Auth = sinon.stub();
    Auth.any = sinon.stub();
    Auth.online = sinon.stub();
    module($provide => {
      $provide.value('Auth', Auth);
      $provide.value('$q', Q);
    });
    inject((_$compile_, _$rootScope_) => {
      compile = _$compile_;
      scope = _$rootScope_;
    });
  });

  const nextTick = () => new Promise(resolve => setTimeout(resolve, 20));

  it('should be shown when auth does not error',  () => {
    Auth.resolves();
    const element = compile('<a mm-auth="can_do_stuff">')(scope);
    scope.$digest();
    return nextTick().then(() => {
      chai.expect(element.hasClass('hidden')).to.equal(false);
      chai.expect(Auth.callCount).to.equal(1);
      chai.expect(Auth.args[0][0]).to.deep.equal(['can_do_stuff']);
    });
  });

  it('should be hidden when auth fails', () => {
    Auth.rejects('boom');
    const element = compile('<a mm-auth="can_do_stuff">')(scope);
    scope.$digest();
    return nextTick().then(() => {
      chai.expect(element.hasClass('hidden')).to.equal(true);
      chai.expect(Auth.has.callCount).to.equal(1);
      chai.expect(Auth.has.args[0][0]).to.deep.equal(['can_do_stuff']);
    });
  });

  it('splits comma separated permissions', () => {
    Auth.resolves(true);
    const element = compile('<a mm-auth="can_do_stuff,!can_not_do_stuff">')(scope);
    scope.$digest();
    return nextTick().then(() => {
      chai.expect(element.hasClass('hidden')).to.equal(false);
      chai.expect(Auth.callCount).to.equal(1);
      chai.expect(Auth.args[0][0]).to.deep.equal(['can_do_stuff', '!can_not_do_stuff']);
    });
  });

  describe('mmAuthOnline', () => {
    it('should be shown when auth does not error', () => {
      Auth.online.resolves();
      const element = compile('<a mm-auth mm-auth-online="true">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([true]);
      });
    });

    it('should be hidden when auth errors', () => {
      Auth.online.resolves();
      const element = compile('<a mm-auth mm-auth-online="false">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([false]);
      });
    });

    it('parses the attribute value', () => {
      Auth.online.resolves();
      const element = compile('<a mm-auth mm-auth-online="1 + 2 + 3">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([6]);
      });
    });
  });

  describe('mmAuth + mmAuthOnline', () => {
    it('should be shown when both do not err', () => {
      Auth.resolves();
      Auth.online.resolves();

      const element = compile('<a mm-auth="permission_to_have" mm-auth-online="true">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([true]);
        chai.expect(Auth.callCount).to.equal(1);
        chai.expect(Auth.args[0][0]).to.deep.equal(['permission_to_have']);
      });
    });

    it('should be hidden when online succeeds and permissions err', () => {
      Auth.rejects();
      Auth.online.resolves();

      const element = compile('<a mm-auth="permission_to_have" mm-auth-online="false">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([false]);
        chai.expect(Auth.callCount).to.equal(1);
        chai.expect(Auth.args[0][0]).to.deep.equal(['permission_to_have']);
      });
    });

    it('should be hidden when online fails and permissions succeed', () => {
      Auth.resolves();
      Auth.online.rejects();

      const element = compile('<a mm-auth="permission_to_have" mm-auth-online="true">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([true]);
        chai.expect(Auth.callCount).to.equal(1);
        chai.expect(Auth.args[0][0]).to.deep.equal(['permission_to_have']);
      });
    });

    it('should be hidden when online fails and auth any succeeds', () => {
      Auth.resolves();
      Auth.online.rejects();

      const element = compile('<a mm-auth mm-auth-any="[\'permission_to_have\', \'another_permission\']" mm-auth-online="true">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
      });
    });

    it('should be hidden when both fail', () => {
      Auth.rejects();
      Auth.online.rejects();

      const element = compile('<a mm-auth="permission_to_have" mm-auth-online="false">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.online.callCount).to.equal(1);
        chai.expect(Auth.online.args[0]).to.deep.equal([false]);
        chai.expect(Auth.has.callCount).to.equal(1);
        chai.expect(Auth.has.args[0][0]).to.deep.equal(['permission_to_have']);
      });
    });
  });

  describe('- any', () => {
    it('should be hidden with false parameter(s)', () => {
      const element = compile('<a mm-auth mm-auth-any="false">')(scope);
      const element2 = compile('<a mm-auth mm-auth-any="[false, false, false]">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(element2.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.any.callCount).to.equal(0);
      });
    });

    it('should be shown with true parameter(s)', () => {
      const element = compile('<a mm-auth mm-auth-any="true">')(scope);
      const element2 = compile('<a mm-auth mm-auth-any="[false, false, true, false, true]">')(scope);
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(element2.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.any.callCount).to.equal(0);
      });
    });

    it('should be shown with at least one allowed permission', () => {
      const element = compile('<a mm-auth mm-auth-any="[\'perm1\', \'perm2\']">')(scope);
      Auth.any.resolves();

      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.any.callCount).to.equal(1);
        chai.expect(Auth.any.args[0][0]).to.deep.equal([['perm1'], ['perm2']]);
      });
    });

    it('should be hidden with no allowed permissions', () => {
      const element = compile('<a mm-auth mm-auth-any="[\'perm1\', \'perm2\']">')(scope);
      Auth.any.rejects();
      scope.$digest();
      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.any.callCount).to.equal(1);
        chai.expect(Auth.any.args[0][0]).to.deep.equal([['perm1'], ['perm2']]);
      });
    });

    it('should work with stacked permissions', () => {
      const element = compile('<a mm-auth mm-auth-any="[[\'a\', \'b\'], [[\'c\', \'d\']], [[[\'e\', \'f\']]], \'g\']">')(scope);
      Auth.any.withArgs([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g']]).resolves();
      scope.$digest();

      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(false);
        chai.expect(Auth.any.callCount).to.equal(1);
        chai.expect(Auth.any.args[0][0]).to.deep.equal([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g']]);
      });
    });

    it('should work with expressions ', () => {
      const element = compile('<a mm-auth mm-auth-any="[true && [\'a\', \'b\'], false && [\'c\', \'d\'], \'f\']">')(scope);
      Auth.any.withArgs([['a', 'b'], ['f']]).rejects();
      scope.$digest();

      return nextTick().then(() => {
        chai.expect(element.hasClass('hidden')).to.equal(true);
        chai.expect(Auth.any.callCount).to.equal(1);
        chai.expect(Auth.any.args[0][0]).to.deep.equal([['a', 'b'], ['f']]);
      });
    });
  });

});
