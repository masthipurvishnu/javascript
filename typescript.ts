// ANY
declare function tomorrow(d: Date): Date;
let val1: any = 1;
val1++;
console.log(val1); // 2
console.log(typeof val1); // int
val1 = "abcd";
console.log(val1); // abcd
console.log(typeof val1); // string
val1 = { a: "xyz" };
console.log(typeof val1); // object
// tomorrow(val) // tomorrow  is not defined.
// ----------------------------
// UNKNOWN: Unknown: set of all possible value
declare function tomorrow(d: Date): Date;
let val2: unknown = 1;
// val++ //'val' is of type 'unknown'.(18046)
// val.foobar = 2 // 'val' is of type 'unknown'.(18046)
if (typeof val2 === "number") val2++;
if (typeof val2 === "string") val2.toUpperCase();
if (Array.isArray(val2)) val2.map((a) => a + 1);
if (
  val2 &&
  typeof val2 === "object" &&
  "foobar" in val2 &&
  typeof val2.foobar === "number"
) {
  val2.foobar = 2;
}
console.log(typeof val2); // unknown

// tomorrow(val) // Argument of type 'unknown' is not assignable to parameter of type 'Date'.(2345)
// ----------------------------
type A = number & string;
type B = boolean & null;
// here A shows as never on mouseover.

type User = "standard" | "admin"; // | 'superadmin' it will error out at _unreachable
function login(user: User) {
  switch (user) {
    case "standard":
      return true;
    case "admin":
      return true;
    default: // user cant assign to type never if we just add 'superadmin' without adding extra case for it.
      const _unreachable: never = user;
      throw "wrong user type";
  }
}
console.log(login("admin1"));
