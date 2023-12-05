import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Set;

public class Analysis {
  private ArrayList<Integer> analysisList;

  Analysis() {
    analysisList = new ArrayList<Integer>();
  }

  public void Load(int[] data) {
    for (int i = 0; i < data.length; i++) {
      analysisList.add(data[i]);
    }
  }

  public int Sum() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      int sum = 0;
      for (int i = 0; i < analysisList.size(); i++) {
        sum += analysisList.get(i);
      }
      return sum;
    }
  }

  public int Sum(int key) {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      int sum = 0;
      for (int i = 0; i < analysisList.size(); i++) {
        if (analysisList.get(i) == key) {
          sum += analysisList.get(i);
        }
      }
      return sum;
    }
  }

  public int Count() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      return analysisList.size();
    }
  }

  public int Count(int key) {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      int count = 0;
      for (int i = 0; i < analysisList.size(); i++) {
        if (analysisList.get(i) == key) {
          count++;
        }
      }
      return count;
    }
  }

  public int Min() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      int min = analysisList.get(0);
      for (int i = 0; i < analysisList.size(); i++) {
        if (analysisList.get(i) < min) {
          min = analysisList.get(i);
        }
      }
      return min;
    }
  }

  public int Max() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      int max = analysisList.get(0);
      for (int i = 0; i < analysisList.size(); i++) {
        if (analysisList.get(i) > max) {
          max = analysisList.get(i);
        }
      }
      return max;
    }
  }

  public double Average() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      return (double) Sum() / analysisList.size();
    }
  }

  public int Range() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      return Max() - Min();
    }
  }

  public double Mean() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      return Math.round((double) Sum() / (double) Count() * 100.0) / 100.0;
    }
  }

  public double Median() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      ArrayList<Integer> data = analysisList;
      data.sort(Comparator.naturalOrder());
      int dataLength = data.size();
      if (dataLength % 2 == 0) {
        return (double) (data.get(dataLength / 2) + data.get(dataLength / 2 - 1)) / 2.0;
      } else {
        return data.get(dataLength / 2);
      }
    }
  }

  public String Mode() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      Set<Integer> keys = Set.copyOf(analysisList);
      int mode = 0, count = 0;
      for (int key : keys) {
        int keyCount = Count(key);
        if (keyCount > count) {
          mode = key;
          count = keyCount;
        }
      }
      return ("{ mode: " + mode + ", count: " + count + " }");
    }
  }

  public double Variance() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      double variance = 0;
      for (Integer number : analysisList) {
        variance += Math.pow(number - Mean(), 2);
      }
      return Math.round(variance / Count() * 10000.0) / 10000.0;
    }
  }

  public double StandardDeviation() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      return Math.round(Math.sqrt(Variance()) * 10000.0) / 10000.0;
    }
  }

  public int[][] FrequencyDistribution() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      Set<Integer> keys = Set.copyOf(analysisList);
      int[][] frequencyDistribution = new int[keys.size()][2];
      int index = 0;
      for (int key : keys) {
        frequencyDistribution[index][0] = key;
        frequencyDistribution[index][1] = Count(key) * 5;
        index++;
      }
      Arrays.sort(frequencyDistribution, (a, b) -> Double.compare(b[1], a[1]));
      return frequencyDistribution;
    }
  }

  public void Describe() {
    if (analysisList.isEmpty()) {
      throw new Error("No data to analyze");
    } else {
      System.out.println("Sum: " + Sum());
      System.out.println("Count: " + Count());
      System.out.println("Min: " + Min());
      System.out.println("Max: " + Max());
      System.out.println("Range: " + Range());
      System.out.println("Mean: " + Mean());
      System.out.println("Median: " + Median());
      System.out.println("Mode: " + Mode());
      System.out.println("Variance: " + Variance());
      System.out.println("Standard Deviation: " + StandardDeviation());
      System.out.println("Frequency Distribution: " + Arrays.deepToString(FrequencyDistribution()));
    }
  }
}
