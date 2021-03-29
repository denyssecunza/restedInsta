exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      { username: "jolizbeth" }, //1
      { username: "erwins" }, //2
      { username: "denysse" }, //3
      { username: "melinda" }, //4
      { username: "shruti" }, //5
      { username: "dillen" }, //6
      { username: "chrismackay" }, //7
      { username: "ruebennett" }, //8
      { username: "natejacobs" }, //9
      { username: "kathernandez" }, //10
      { username: "tylerclarkson" }, //11
      { username: "maddyperez" }, //12
    ]);
  });
};
