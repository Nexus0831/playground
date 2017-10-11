const validate = (values) => {
  const errors = {};

  if (!values.many) {
    errors.many = "金額を必ず入力してください";
  } else if (!/[0-9]/i.test(values.many)) {
    errors.many = "金額は必ず数字のみで入力してください";
  }

  return errors;
}

export default validate;
