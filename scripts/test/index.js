/**
 * Created by JBH on 2015/4/20.
 */
define(function(require) {
    var user = require('../test/user');
    var admin = require('../test/admin');
    return {
        f1: user.userInfo,
        f2: admin.save
    }
});