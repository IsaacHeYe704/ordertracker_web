export const getIndex = (step)=> {
    switch (step) {
      case "Lost In transit / Issues":
        return 0;
      case "Transit U.S":
        return 0;
      case "Transit Country of Destination":
        return 0;
      case "Customs Process":
        return 1;
      case "In warehouse":
        return 2;
      case "Pending Distribution":
        return 2;
      case "Local Distribution":
        return 3;
      case "Delivered":
        return 4;
      default:
        return 0;
    }
}