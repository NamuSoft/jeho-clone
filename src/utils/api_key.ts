import { createCipheriv, createDecipheriv, randomBytes } from "crypto";
// import * as crypto from "crypto";
const GOOGLE_API_KEY = "AIzaSyCkialBeSyPmOnrcctllRHwQ5PnxiHB4Gs";

function encrypt(key: string, text: string) {
  const iv = randomBytes(12).toString("base64");
  const cipher = createCipheriv(
    "aes-256-gcm",
    Buffer.from(key, "base64"),
    Buffer.from(iv, "base64")
  );
  let encrypted = cipher.update(text, "utf8", "base64");

  encrypted += cipher.final("base64");
  const tag = cipher.getAuthTag();

  return { encrypted, tag, iv, key };
}

// function decrypt(ciphertext: string,tag:Buffer,key:string,iv:string) {
// const decipher = createDecipheriv("aes-256-gcm",
// Buffer.from(key,'base64'),
// Buffer.from(iv,'base64')
// );
// //   decipher.setAuthTag(Buffer.from(tag, 'base64'));
// decipher.setAuthTag(Buffer.from(tag,'base64'))
//   let plaintext = decipher.update(ciphertext, "base64", "utf8");
//   plaintext += decipher.final("utf8");
//   return plaintext;
// }
const key = randomBytes(32).toString("base64");
export const { encrypted, tag, iv } = encrypt(key, GOOGLE_API_KEY);
// export const decrypted = decrypt(encrypted,tag,key,iv);
