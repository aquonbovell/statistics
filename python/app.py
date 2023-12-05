from Analysis import Analysis

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 123, 3,
  31, 34, 24, 33, 29, 26, 28
];

analysis = Analysis()
analysis.load(ages)
analysis.describe()