export const validator = {
  length(value: string, max: number) {
    return 1 <= value.length && value.length <= max;
  },

  korean(value: string) {
    return /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(value);
  },

  password(value: string) {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~`\-=[\]\;',.\/]).{1,16}$/.test(value);
  },
};
