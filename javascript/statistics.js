module.exports = class Statistics {
  constructor(args) {
    this.data = [...args];
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, curr) => {
      return (acc += curr);
    }, 0);
  }
  min() {
    const values = [...this.data];
    return values.length <= 1
      ? values
      : values
          .sort((a, b) => {
            return a - b;
          })
          .shift();
  }
  max() {
    const values = [...this.data];
    return values.length <= 1
      ? values
      : values.sort((a, b) => {
          return b - a;
        })[0];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const values = this.data;
    values.sort((a, b) => {
      a - b;
    });
    if (values.length % 2 === 0)
      return `${values[Math.floor(values.length / 2 - 1)]}, ${
        values[Math.floor(values.length / 2)]
      }`;
    return values[Math.floor(values.length / 2 - 1)];
  }

  mode() {
    const mode = {
      mode: 0,
      count: 0,
    };
    const value_keys = new Set(this.data);
    value_keys.forEach((key) => {
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

  var() {
    const variance = this.data.reduce((acc, curr) => {
      return (acc += Math.pow(curr - this.mean(), 2));
    }, 0);
    return variance / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const freqDistri = [];
    const value_keys = new Set(
      this.data.sort((a, b) => {
        return b - a;
      })
    );
    value_keys.forEach((key) => {
      const count = this.data.filter((value) => {
        return value === key;
      }).length;
      freqDistri.push({ value: key, frequency: count * 4 });
    });
    return freqDistri.sort((a, b) => {
      return b.frequency - a.frequency;
    });
  }

  describe() {
    console.log("Count:", this.count());
    console.log("Sum: ", this.sum());
    console.log("Min: ", this.min());
    console.log("Max: ", this.max());
    console.log("Range: ", this.range());
    console.log("Mean: ", this.mean().toFixed(0));
    console.log("Median: ", this.median());
    console.log("Mode: ", this.mode());
    console.log("Variance: ", this.var().toFixed(1));
    console.log("Standard Deviation: ", this.std().toFixed(1));
    console.log("Variance: ", this.var().toFixed(1));
    console.log("Frequency Distribution: ", this.freqDist());
  }
};
