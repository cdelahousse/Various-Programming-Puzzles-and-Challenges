// Write a function that returns the longest word(s) from a sentence. The
// function should not return any duplicate words (case-insensitive).
// https://github.com/blakeembrey/code-problems/tree/master/problems/longest-words
import java.util.*;

class LongestWords {
  public ArrayList<String> invoke(String phrase) {
    String[] words = phrase.split(" ");

    int max = 0;
    ArrayList<String> results = new ArrayList<String>();
    for (String word: words) {
      if (word.length() > max) {
        results = new ArrayList<String>();
        results.add(word.toLowerCase());
      }
      else if (word.length() == max && results.indexOf(word.toLowerCase()) > -1) {
        results.add(word.toLowerCase());
      }
    }
    return results;
  }

  public static void printArray(ArrayList<String> al) {
    System.out.println(al.toString());
  }
  public static void main(String[] args) {
    LongestWords lw = new LongestWords();
    printArray(lw.invoke(""));
    printArray(lw.invoke("Hi"));
    printArray(lw.invoke("Hi man"));
    printArray(lw.invoke("Hi man mAn"));
    printArray(lw.invoke("Hi man mAn hi hello"));
    printArray(lw.invoke("Hello Hi man mAn hi hello"));
  }
}

