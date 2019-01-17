export const formatDate = (date) => {
  let today = new Date();
  let paymentDate = new Date(date);
  let timeDiff = Math.abs(today.getTime() - paymentDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);

  if (diffDays === 1) {
    return diffDays + ' dzień temu'
  } else if (diffDays >= 2) {
    return diffDays + ' dni temu'
  }
}
