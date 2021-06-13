var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_WRITE"] = 2] = "READ_WRITE";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN
};
console.log(person.role);
