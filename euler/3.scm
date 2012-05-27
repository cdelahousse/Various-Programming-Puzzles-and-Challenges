#lang planet neil/sicp

(define (square n)
  (* n n))
(define (expmod base exp m)
  (cond ((= exp 0) 1)
        ((even? exp)
         (remainder (square (expmod base (/ exp 2) m))
                    m))
        (else
         (remainder (* base (expmod base (- exp 1) m))
                    m))))        

(define (fermat-test n)
  (define (try-it a)
    (= (expmod a n n) a))
  (try-it (+ 1 (random 1000))))



(define (fast-prime? n times)
  (cond ((= times 0) true)
        ((fermat-test n) (fast-prime? n (- times 1)))
        (else false)))

(define (prime? n)
  (fast-prime? n 20))

(define (find-biggest-prime n)
  (define (iter factor)
    (if (prime? factor)
        factor
        (iter (- factor 2))));Skip even numbers
  (if (even? n)
      (iter (- n 1))
      (iter n)))

(define (big-prime-factor n)
  (define (iter factor biggest)
    (cond ((< (sqrt n) factor) biggest)
          ((and (= (remainder n factor) 0) (prime? factor))
           (iter (+ 2 factor) factor))
          (else (iter (+ 2 factor) biggest)))) ;Skip even
  (iter 1 2))  

(big-prime-factor 600851475143)