import SHA3 from "crypto-js/sha3";

let sha3 = value => {
  return SHA3(value, {
    outputLength: 256
  }).toString();
};

export default address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    return true;
  } else {
    const cuttedAddress = address.replace("0x", "");
    const addressHash = sha3(cuttedAddress.toLowerCase());
    for (let i = 0; i < 40; i++) {
      if (
        (parseInt(addressHash[i], 16) > 7 &&
          cuttedAddress[i].toUpperCase() !== cuttedAddress[i]) ||
        (parseInt(addressHash[i], 16) <= 7 &&
          cuttedAddress[i].toLowerCase() !== cuttedAddress[i])
      ) {
        return false;
      }
    }
    return true;
  }
};
