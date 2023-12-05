using System.Text;

class Analysis
{
  readonly List<double> _list;

  public Analysis()
  {
    _list = [];
  }

  public void Load(double[] values)
  {
    _list.Clear();
    foreach (double value in values)
    {
      _list.Add(value);
    }
  }

  public void Add(double value)
  {
    _list.Add(value);
  }

  public double Sum()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double sum = 0;
    foreach (double value in _list)
    {
      sum += value;
    }
    return sum;
  }

  public double Sum(double key)
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double sum = 0;
    foreach (double value in _list)
    {
      if (value == key)
      {
        sum += value;
      }
    }
    return sum;
  }

  public double Count()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double count = 0;
    foreach (double value in _list)
    {
      count++;
    }
    return count;
  }

  public double Count(double key)
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double count = 0;
    foreach (double value in _list)
    {
      if (value == key)
      {
        count++;
      }
    }
    return count;
  }
  public double Min()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double min = _list[0];
    foreach (double value in _list)
    {
      if (value < min)
      {
        min = value;
      }
    }
    return min;
  }

  public double Max()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double max = _list[0];
    foreach (double value in _list)
    {
      if (value > max)
      {
        max = value;
      }
    }
    return max;
  }

  public double Range()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    return Max() - Min();
  }

  public double Mean()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    return Sum() / Count();
  }

  public double Median()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double[] data = new double[_list.Count];
    _list.CopyTo(0, data, 0, _list.Count);
    Array.Sort(data);
    int data_length = data.Length;
    if (data_length % 2 == 1)
    {
      return data[data_length / 2];
    }
    else
    {
      return (data[(data_length / 2) - 1] + data[data_length / 2]) / 2;
    }
  }

  public Tuple<double, double> Mode()
  {
    Tuple<double, double> mode = new(0.0, 0.0);

    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }

    HashSet<double> keys = new(_list);

    foreach (double key in keys)
    {
      double keyCount = Count(key); // Assuming Count is a method to count occurrences of 'key'

      if (keyCount > mode.Item2)
      {
        mode = new Tuple<double, double>(key, keyCount);
      }
    }
    return mode;
  }

  public double Variance()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    double mean = Mean();
    double sum = 0;
    foreach (double value in _list)
    {
      sum += Math.Pow(value - mean, 2);
    }
    return sum / Count();
  }

  public double StandardDeviation()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    return Math.Sqrt(Variance());
  }

  public double[][] FrequencyDistribution()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    HashSet<double> keys = new(_list);
    double[][] frequencyDistribution = new double[keys.Count][];
    int index = 0;

    foreach (double key in keys)
    {
      frequencyDistribution[index] = new double[2];
      frequencyDistribution[index][0] = key;
      frequencyDistribution[index][1] = Count(key) * 5;
      index++;
    }
    return frequencyDistribution;
  }

  public void Describe()
  {
    if (_list.Count == 0)
    {
      throw new Exception("Error: No data loaded");
    }
    Console.WriteLine("Sum: " + Sum().ToString("0.00"));
    Console.WriteLine("Count: " + Count().ToString("0.00"));
    Console.WriteLine("Min: " + Min().ToString("0.00"));
    Console.WriteLine("Max: " + Max().ToString("0.00"));
    Console.WriteLine("Range: " + Range().ToString("0.00"));
    Console.WriteLine("Mean: " + Mean().ToString("0.00"));
    Console.WriteLine("Median: " + Median().ToString("0.00"));
    Console.WriteLine("Mode: " + Mode());
    Console.WriteLine("Variance: " + Variance().ToString("0.00"));
    Console.WriteLine("Standard Deviation: " + StandardDeviation().ToString("0.00"));
    Console.WriteLine("Frequency Distribution: " + Display(FrequencyDistribution()));
  }

  public static string Display(double[][] matrix)
  {
    StringBuilder output = new("[");

    foreach (double[] row in matrix)
    {
      output.Append($"[{row[0].ToString("0.00")}, {row[1].ToString("0.00")}], ");
    }

    if (output.Length > 1)
    {
      output.Length -= 2; // Remove the last comma and space
    }

    output.Append(']');
    return output.ToString();
  }

}