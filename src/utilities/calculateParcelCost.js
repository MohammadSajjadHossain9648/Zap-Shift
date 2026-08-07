const calculateParcelCost = (data) => {
  const isDocument = data.parcelType === "document";
  const isSameDistrict = data.senderDistrict === data.receiverDistrict;

  let cost = 0;
  const parcelWeight = parseFloat(data.ParcelWeight);

  if (isDocument) {
    cost = isSameDistrict ? 60 : 80;
  } else {
    if (parcelWeight < 3) {
      cost = isSameDistrict ? 110 : 150;
    } else {
      const minCharge = isSameDistrict ? 110 : 150;
      const extraWeight = parcelWeight - 3;
      const extraCharge = isSameDistrict
        ? extraWeight * 40
        : extraWeight * 40 + 40;
      cost = minCharge + extraCharge;
    }
  }

  console.log("cost: ", cost);
  return cost;
};

export default calculateParcelCost;
