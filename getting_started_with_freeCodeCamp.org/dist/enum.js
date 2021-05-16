var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var user1236 = {
    name: "abc",
    role: Role.ADMIN
};
var user454 = {
    name: "def",
    role: Role.AUTHOR
};
var user13215 = {
    name: "ghi",
    role: Role.READ_ONLY
};
var allUsers = [user1236, user454, user13215];
allUsers.forEach(function (user) {
    if (user.role === Role.ADMIN) {
        console.log("Name : " + user.name);
        console.log("Name : " + user.role);
    }
    else if (user.role === Role.AUTHOR) {
        console.log("Name : " + user.name);
        console.log("Name : " + user.role);
    }
    else if (user.role === Role.READ_ONLY) {
        console.log("Name : " + user.name);
        console.log("Name : " + user.role);
    }
});
