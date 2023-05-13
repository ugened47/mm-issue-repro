const ENC_UTF8 = "utf8";
const ENC_HEX = "hex";

function utf8ToHex(utf8: string, prefixed = false) {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}

function bufferToHex(buf: Buffer, prefixed = false) {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}

function addHexPrefix(hex: string) {
  return hex.startsWith("0x") ? hex : `0x${hex}`;
}

function utf8ToBuffer(utf8: string) {
  return Buffer.from(utf8, ENC_UTF8);
}

export function convertUtf8ToHex(utf8: string, noPrefix: boolean = false) {
  return utf8ToHex(utf8, !noPrefix);
}