(define (fib n)
  (define (iter sum prev count)
    (cond ((= n 0) 0)
          ((= n 1) 1)
          ((> count n) sum)
          (else (iter (+ sum prev) sum (+ 1 count) ))))
  (iter 1 1 3))




(fib 0)
(fib 1)
(fib 2)
(fib 3)
(fib 4)
(fib 5)
(fib 6)
(fib 7)

(define (enum f max)
  (define (iter list count)
    (if (> count max)
        list
        (iter (cons (fib count) list) (+ count 1 ))
    (iter '() 0))))
