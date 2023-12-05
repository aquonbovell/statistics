module.exports = class Analysis {
  constructor() {
    this.data = [];
  }

  load(arr) {
    this.data = arr;
  }

  count(key = null) {
    if (!this.data.length) throw new Error("Error: No data loaded");
    if (key) return this.data.filter((value) => value === key).length;
    return this.data.length;
  }

  sum(key = null) {
    if (!this.data.length) throw new Error("Error: No data loaded");
    if (key)
      return this.data.reduce(
        (acc, curr) => (curr === key ? (acc += curr) : (acc += 0)),
        0
      );
    return this.data.reduce((acc, curr) => (acc += curr), 0);
  }

  min() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    let min = this.data[0];
    this.data.forEach((value) => {
      if (min > value) min = value;
    });
    return min;
  }

  max() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    let max = this.data[0];
    this.data.forEach((value) => {
      if (max < value) max = value;
    });
    return max;
  }

  range() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    return this.max() - this.min();
  }

  mean() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    return Math.round((this.sum() / this.count()) * 100) / 100;
  }   

  median() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    const data = [...this.data];
    data.sort();
    const data_len = data.length;
    if (data_len % 2 === 0)
      return (
        (data[Math.floor(data_len / 2 - 1)] + data[Math.floor(data_len / 2)]) /
        2
      );
    return data[Math.floor(data_len / 2 - 1)];
  }

  mode() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    const mode = { mode: 0, count: 0 };
    const keys = new Set(this.data);
    keys.forEach((key) => {
      const count = this.data.filter((value) => {
        return value === key;
      }).length;
      if (mode["count"] < count) {
        mode["mode"] = key;
        mode["count"] = count;
      }
    });
    return mode;
  }

  variance() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    const variance = this.data.reduce((acc, curr) => {
      return (acc += Math.pow(curr - this.mean(), 2));
    }, 0);
    return Math.round((variance / this.count()) * 10000) / 10000;
  }

  standard_deviation() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    return Math.round(Math.sqrt(this.variance()) * 10000) / 10000;
  }

  frequency_distribution() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    const freqDistri = [];
    const keys = new Set(
      this.data.sort((a, b) => {
        return b - a;
      })
    );
    keys.forEach((key) => {
      const count = this.data.filter((value) => {
        return value === key;
      }).length;
      freqDistri.push({ value: key, frequency: count * 5 });
    });
    return freqDistri.sort((a, b) => {
      return b.frequency - a.frequency;
    });
  }

  describe() {
    if (!this.data.length) throw new Error("Error: No data loaded");
    console.log("Count:", this.count());
    console.log("Sum: ", this.sum());
    console.log("Min: ", this.min());
    console.log("Max: ", this.max());
    console.log("Range: ", this.range());
    console.log("Mean: ", this.mean());
    console.log("Median: ", this.median());
    console.log("Mode: ", this.mode());
    console.log("Variance: ", this.variance());
    console.log("Standard Deviation: ", this.standard_deviation());
    console.log("Frequency Distribution: ", this.frequency_distribution());
  }
};
