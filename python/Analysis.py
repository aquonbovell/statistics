class Analysis:
  def __init__(self):
    self._data = list()
  
  def count(self,key=None):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    if key:
      return self._data.count(key)
    return len(self._data)
  
  def sum(self, key=None):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    if not key:
      total = 0
      for i in range(len(self._data)):
        total+=self._data[i]
      return total
    if key:
      total = 0
      for i in range(len(self._data)):
        if key == self._data[i]:
          total+=self._data[i]
      return total

  def min(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    min = self._data[0]
    for i in range(len(self._data)):
      if min > self._data[i]:
        min = self._data[i]
    return min
  
  def max(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    max = self._data[0]
    for i in range(len(self._data)):
      if max < self._data[i]:
        max = self._data[i]
    return max
  
  def range(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    return self.max() - self.min()
  
  def mean(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    return round(self.sum() / self.count(),2)
  
  def get_sorted_data(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    return sorted(self._data)

  def median(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    data = self.get_sorted_data()
    data_len = len(data)
    if data_len % 2 == 0:
      return (data[data_len // 2 - 1] + data[data_len // 2]) / 2
    return data[data_len // 2]
  
  def mode(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    mode = { "mode": 0, "count": 0 }
    keys = set(self._data)
    for key in keys:
      count = self.count(key)
      if(mode["count"] < count):
        mode["mode"] = key
        mode["count"] = count
    return mode
  
  def variance(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    variance = 0
    for i in range(len(self._data)):
      variance += pow(self._data[i] - self.mean(),2)
    return round(variance / self.count(),2)
  
  def standard_deviation(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    return round(pow(self.variance(),.5),2)
  
  def frequency_distribution(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    freqDist = list()
    keys = set(self._data)
    for key in keys:
      count  = self.count(key)
      freqDist.append((key,count*5))
    freqDist.sort(key=lambda a: a[1],reverse=True)
    return freqDist

  def describe(self):
    if not self._data:  
      raise ValueError("Error: No data loaded")
    print("Count:", self.count());
    print("Sum: ", self.sum());
    print("Min: ", self.min());
    print("Max: ", self.max());
    print("Range: ", self.range());
    print("Mean: 3".format(self.mean()));
    print("Median: ", self.median());
    print("Mode: ", self.mode());
    print("Standard Deviation: ".format(self.standard_deviation()));
    print("Variance: ".format(self.variance()));
    print("Frequency Distribution: ", self.frequency_distribution())

  def load(self, data):
    self._data = data.copy()
