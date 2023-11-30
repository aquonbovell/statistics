from math import floor

class Statistics:
  def __init__(self, *args):
    self._data = list(*args)
  
  def count(self):
    return len(self._data)
  
  def sum(self):
    sum = 0
    for i in range(len(self._data)):
      sum+=self._data[i]
    return sum
  
  def min(self):
    min = self._data[0]
    for i in range(len(self._data)):
      if min > self._data[i]:
        min = self._data[i]
    return min
  
  def max(self):
    max = self._data[0]
    for i in range(len(self._data)):
      if max < self._data[i]:
        max = self._data[i]
    return max
  
  def range(self):
    return self.max() - self.min()
  
  def mean(self):
    return self.sum() / self.count()
  
  def median(self):
    data = self._data.copy()
    data.sort()
    if len(data) % 2 == 0:
      return '{},{}'.format(data[floor(len(data)/2 - 1)],data[floor(len(data)/2)])
    return data[floor(len(data)/2)]
  
  def mode(self):
    mode = {
      "mode": 0,
      "count": 0
    }

    keys = set(self._data.copy())

    for key in keys:
      count  = self._data.count(key)
      if(mode["count"] < count):
        mode["mode"] = key
        mode["count"] = count
    return mode
  
  def var(self):
    variance = 0
    for i in range(len(self._data)):
      variance += pow(self._data[i] - self.mean(),2)
    return variance / self.count()
  
  def std(self):
    return pow(self.var(),.5)
  
  def freqDist(self):
    freqDist = list()
    keys = set(self._data)
    for key in keys:
      count  = self._data.count(key)
      freqDist.append((key,count*4))
    freqDist.sort(key=lambda a: a[0],reverse=True)
    freqDist.sort(key=lambda a: a[1],reverse=True)
    return freqDist

  def describe(self):
    print("Count:", self.count());
    print("Sum: ", self.sum());
    print("Min: ", self.min());
    print("Max: ", self.max());
    print("Range: ", self.range());
    print("Mean: {:.0f}".format(self.mean()));
    print("Median: ", self.median());
    print("Mode: ", self.mode());
    print("Variance: {:.1f}".format(self.var()));
    print("Standard Deviation: {:.1f}".format(self.std()));
    print("Variance: {:.1f}".format(self.var()));
    print("Frequency Distribution: ", self.freqDist());
