// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe, 존 트라볼타" });
// }

// import { data } from "autoprefixer";
// import User from "../../models/User";
// import db from "../../utils/db";

// const handler = async (req, res) => {
//   await db.connect();
//   await User.deleteMany();
//   await User.insertMany(data.users);
//   await db.disconnect();
//   res.send({
//     message: "seeded successfully.. 초기 사용자가 성공적으로 등록되었습니다..",
//   });
// };

// export default handler;

import User from "../../models/User";
import Product from "../../models/Product";
import data from "../../utils/data";
import db from "../../utils/db";
const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);

  await db.disconnect();
  res.send({ message: "seeded successfully" });
};
export default handler;
