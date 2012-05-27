;If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
;Find the sum of all the multiples of 3 or 5 below 1000.


;Helper

(define outputcounter 0)
(define (outputcounterinc)
  (begin (set! outputcounter (+ outputcounter 1))
         (display outputcounter )
         (display ") ")))



;Dividable implementation
(define (divisible n d)
  (= (modulo n d) 0))


(define (div-maker d)
  (lambda (n)
    (divisible n d)))


(define div5 (div-maker 5))
(define div3 (div-maker 3))

(define (sum-div5or3 n)
  (define (iter sum counter)
    (cond
      ((>= counter n) sum)
      ((or (div5 counter) (div3 counter)) 
       (begin 
         (outputcounterinc)
         (display counter)
         (newline)
         (iter (+ counter sum) (+ 1 counter))))
      (else (iter sum (+ 1 counter)))))
  (iter 0 1))

(define answer (sum-div5or3 1000))
(display answer)

;Multiplicative implementation ;;NOT WORKING!
(define 
  (less-than? n)
  (lambda (x)
    (< x n)))

(define less-than-10? (less-than? 10))
(less-than-10? 9)
(less-than-10? 10)


(define (sum-div5or3 n)
  (define less-than-n? (less-than? n))
  (define (iter sum i)
    (cond ((or (less-than-n? (* i 3)) 
               (less-than-n? (* i 5)))
           (begin 
             (display i)
             (newline)
             (iter (+ sum i) (+ i 1)))
           (else sum)))
    (iter 0 1))
  
  
  (sum-div5or3 1000)
  