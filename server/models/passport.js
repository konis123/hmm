import passport from 'passport';
import passportFacebook from 'passport-facebook'
var FacebookStrategy = passportFacebook.Strategy;


module.exports = function(){
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new LocalStrategy({
    usernameField: 'id'
  }, function (id, password, done) {
    Users.findOne({ id: id }, function (findError, user) {
      if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' });
      return user.comparePassword(password, function (passError, isMatch) {
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { message: '비밀번호가 틀렸습니다' });
      });
    });
  }));

  passport.use(new FacebookStrategy({
    clientID: '페이스북 클라이언트 아이디',
    clientSecret: '페이스북 클라이언트 시크릿',
    callbackURL: '홈페이지주소/api/account/facebook/callback',
    passReqToCallback: true,
  }, function(req, accessToken, refreshToken, profile, done) {
    User.findOne({ id: profile.id }, function(err, user) {
      if (user) { return done(err, user); } // 회원 정보가 있으면 로그인
      const newUser = new User({
        id: profile.id
      });
      newUser.save(function() {
        return done(null, newUser); // 새로운 회원 생성 후 로그인
      });
    });
  }

}
