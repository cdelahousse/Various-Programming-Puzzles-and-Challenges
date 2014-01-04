// Classic FizzBuzz implementation
class FizzBuzz {
  private final String NEWLINE = "\n";
  public String invoke (int maxNumber) {
    String buffer = "";
    for (int currentNumber = 1; currentNumber <= maxNumber; currentNumber++) {
      if (isMultipleOf(currentNumber, 5) && isMultipleOf(currentNumber, 3)) {
        buffer += "fizzbuzz" + NEWLINE;
      } else if (isMultipleOf(currentNumber, 3)) {
        buffer += "fizz" + NEWLINE;
      } else if (isMultipleOf(currentNumber, 5)) {
        buffer += "buzz" + NEWLINE;
      } else {
        buffer += currentNumber + NEWLINE;
      }
    }
    return buffer;
  }
  private boolean isMultipleOf(int number, int modNumber) {
    return number % modNumber == 0;
  }
  public static void main(String[] args) {
    FizzBuzz fb = new FizzBuzz();
    System.out.println(fb.invoke(100));
  }
}

