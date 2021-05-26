class SaveLocal {
  static value;

  set valor(value) {
    this.value = value;
  }

  get valor() {
    return { operation: this.value || '', result: eval(this.value) || '' };
  }

  get results() {
    return this.value?.map((e) => e.result);
  }
}

export default SaveLocal;
