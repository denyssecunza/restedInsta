exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      { username: "janedoe" }, //1
      { username: "johnsmith" }, //2
      { username: "suziejones" }, //3
      { username: "abigailberry" }, //4
      { username: "emilyhart" }, //5
      { username: "adrianhill" }, //6
      { username: "chrismackay" }, //7
      { username: "ruebennett" }, //8
      { username: "natejacobs" }, //9
      { username: "kathernandez" }, //10
      { username: "tylerclarkson" }, //11
      { username: "maddyperez" }, //12
    ]);
  });
};
