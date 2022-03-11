

function Triangle(a, b, c){
    
    if (a+b>c && b+c>a && c+a>b){
              
        p = a + b + c;
        console.log('სამკუთხედის პერიმეტრია: ' + p);


        console.log("-------------------------------------------------------");

        n = p/2;
        var s = Math.sqrt(n*(n-a)*(n-b)*(n-c))
        console.log('სამკუთხედის ფართობია: ' + s);


        console.log("-------------------------------------------------------");


        Amediana = (1/2)*Math.sqrt(2*(Math.pow(b,2) + Math.pow(c, 2)) - Math.pow(a, 2));
        console.log("a გვერდზე დაშვებული მედიანის სიგრძეა: " + Amediana );
    
        Bmediana = (1/2)*Math.sqrt(2*(Math.pow(c,2) + Math.pow(a, 2)) - Math.pow(b, 2));
        console.log("b გვერდზე დაშვებული მედიანის სიგრძეა: " + Bmediana );

        Cmediana = (1/2)*Math.sqrt(2*(Math.pow(a,2) + Math.pow(b, 2)) - Math.pow(c, 2));
        console.log("c გვერდზე დაშვებული მედიანის სიგრძეა: " + Cmediana );


        console.log("-------------------------------------------------------");

        z = Math.pow((b + c), 2);
        Abisector = (1/(b + c))*Math.sqrt(b*c*((z) - Math.pow(a, 2)));
        console.log("a გვერდზე დაშვებული ბისექტრისის სიგრძეა: " + Abisector );

        v = Math.pow((a+c), 2);
        Bbisector = (1/(a + c))*Math.sqrt(a*c*((v) - Math.pow(b, 2)));
        console.log("b გვერდზე დაშვებული ბისექტრისის სიგრძეა: " + Bbisector );

        i = Math.pow((a + b), 2);
        Cbisector = (1/(a + b))*Math.sqrt(a*b*((i) - Math.pow(c, 2)));
        console.log("c გვერდზე დაშვებული ბისექტრისის სიგრძეა: " + Cbisector );


        console.log("-------------------------------------------------------");


        Aheight = (2*s)/a;
        console.log('a გვერდზე დაშვებული სიმაღლის სიგრძეა: ' + Aheight);
       
        Bheight = (2*s)/b;
        console.log('b გვერდზე დაშვებული სიმაღლის სიგრძეა: ' + Bheight);

        Cheight = (2*s)/c;
        console.log('c გვერდზე დაშვებული სიმაღლის სიგრძეა: ' + Cheight);


        console.log("-------------------------------------------------------");


        radius = (2*s)/p;
        console.log('სამკუთხედში ჩახაზული წრეწირის რადიუსია: ' + radius);

        Radius = a*b*c/(4*s);
        console.log('სამკუთხედზე შემოხაზული წრეწირის რადიუსია: ' + Radius);
    }
    else {
        console.log("Eror: ესეთი სამკუთხედი არ არსებობს");
    }
    
}


Triangle(5, 5, 6); 

 








