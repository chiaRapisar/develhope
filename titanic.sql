--Es1                    Link: https://sqliteonline.com/#share=979d11c5f3511493e83907575aa8df7f1a46b5cdfda623e1fd031ca28dd89b30
SELECT *
FROM testedn
WHERE c6> 30
	AND c5='female'
	AND c2 = 1
    
    --Es2                   https://sqliteonline.com/#share=ac8481b3162a42adac2b5be6b951d1d6d4d61e8be358a6747a284d3ff7f39956
SELECT AVG(c6)
FROM testedn
WHERE c2= 0
	AND c5= 'male'
   
    --Es3                   https://sqliteonline.com/#share=2cc80ff0b836b3f4ca6660536371bf6ece69e7b221df861aa996bf717c960c9c
SELECT * FROM testedn
WHERE c10 BETWEEN 20 AND 50 AND c12 = 'C';

--Es4                       https://sqliteonline.com/#share=d99adb039291526362505ab46e708ee24d4633955d14125aca0037d78a8e3ceb

SELECT COUNT(*)  FROM testedn
WHERE c2 = 1 AND c3= 1;

--Es5                        https://sqliteonline.com/#share=c2ab957694721d46546b24a3065c69b3a978f65cabbd576255c9aec81e3b9931

SELECT * FROM testedn
WHERE c12= 'C' AND c10 > 75;


