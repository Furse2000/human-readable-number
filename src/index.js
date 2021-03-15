module.exports = function toReadable (num) {
  kk=num.toString();

  let k0='zero';
  let k1='one';
  let k2='two';
  let k3='three';
  let k4='four';
  let k5='five';
  let k6='six';
  let k7='seven';
  let k8='eight';
  let k9='nine';
  let k10='ten';
  let k11='eleven';
  let k12='twelve';
  let k13='thirteen';
  let k15='fifteen';
  let k16='sixteen'
  let k17='seventeen'
  let k14='fourteen'
  let k18='eighteen'
  let k19='nineteen'
  let k20='twenty'
  let k30='thirty'
  let k40='forty'
  let k50='fifty';
  let k60='sixty';
  let k70='seventy';
  let k80='eighty'
  let k90='ninety'
  let k100='hundret'
  if(num==0) return k0;
  if(num==1) return k1;
  if(num==2) return k2;
  if(num==3) return k3;
  if(num==4) return k4;
  if(num==5) return k5;
  if(num==6) return k6;
  if(num==7) return k7;
  if(num==8) return k8;
  if(num==9) return k9;
  if(num==10) return k10;
  let str=[];
  if((num>9)&&(num<100))
  {
    if(kk[0]==9) str=str.concat(k90);
    if(kk[0]==8) str=str.concat(k80);
    if(kk[0]==7) str=str.concat(k70);
    if(kk[0]==6) str=str.concat(k60);
    if(kk[0]==5) str=str.concat(k50);
    if(kk[0]==4) str=str.concat(k40);
    if(kk[0]==3) str=str.concat(k30);
    if(kk[0]==2) str=str.concat(k20);
    if(kk[0]==1) 
    { 
      if(kk[1]==9) str=str.concat(k19);
      if(kk[1]==8) str=str.concat(k18);
      if(kk[1]==7) str=str.concat(k17);
      if(kk[1]==6) str=str.concat(k16);
      if(kk[1]==5) str=str.concat(k15);
      if(kk[1]==4) str=str.concat(k14);
      if(kk[1]==3) str=str.concat(k13);
      if(kk[1]==2) str=str.concat(k12);
      if(kk[1]==1) str=str.concat(k11);
      if(kk[1]==0) str=str.concat(k10);
      return str.join(' ');
    }
      if(kk[1]==9) str=str.concat(k9);
      if(kk[1]==8) str=str.concat(k8);
      if(kk[1]==7) str=str.concat(k7);
      if(kk[1]==6) str=str.concat(k6);
      if(kk[1]==5) str=str.concat(k5);
      if(kk[1]==4) str=str.concat(k4);
      if(kk[1]==3) str=str.concat(k3);
      if(kk[1]==2) str=str.concat(k2);
      if(kk[1]==1) str=str.concat(k1);
      return str.join(' ');
}

if((num>99)&&(num<1010))
  {  
    
    if(kk[0]==9) str=str.concat(k9);
    if(kk[0]==8) str=str.concat(k8);
    if(kk[0]==7) str=str.concat(k7);
    if(kk[0]==6) str=str.concat(k6);
    if(kk[0]==5) str=str.concat(k5);
    if(kk[0]==4) str=str.concat(k4);
    if(kk[0]==3) str=str.concat(k3);
    if(kk[0]==2) str=str.concat(k2);
    if(kk[0]==1) str=str.concat(k1);
    
    str=str.concat('hundred');

    if(kk[1]==9) str=str.concat(k90);
    if(kk[1]==8) str=str.concat(k80);
    if(kk[1]==7) str=str.concat(k70);
    if(kk[1]==6) str=str.concat(k60);
    if(kk[1]==5) str=str.concat(k50);
    if(kk[1]==4) str=str.concat(k40);
    if(kk[1]==3) str=str.concat(k30);
    if(kk[1]==2) str=str.concat(k20);
    if(kk[1]==1) 
    { 
      if(kk[2]==9) str=str.concat(k19);
      if(kk[2]==8) str=str.concat(k18);
      if(kk[2]==7) str=str.concat(k17);
      if(kk[2]==6) str=str.concat(k16);
      if(kk[2]==5) str=str.concat(k15);
      if(kk[2]==4) str=str.concat(k14);
      if(kk[2]==3) str=str.concat(k13);
      if(kk[2]==2) str=str.concat(k12);
      if(kk[2]==1) str=str.concat(k11);
      if(kk[2]==0) str=str.concat(k10);
      return str.join(' ');
    }
      if(kk[2]==9) str=str.concat(k9);
      if(kk[2]==8) str=str.concat(k8);
      if(kk[2]==7) str=str.concat(k7);
      if(kk[2]==6) str=str.concat(k6);
      if(kk[2]==5) str=str.concat(k5);
      if(kk[2]==4) str=str.concat(k4);
      if(kk[2]==3) str=str.concat(k3);
      if(kk[2]==2) str=str.concat(k2);
      if(kk[2]==1) str=str.concat(k1);
      return str.join(' ');
}
  
  str=[];
  let i=3
    /*  if(num>99)////3
      {
          if(kk[i-1]==9) str=str.concat(k9);
          if(kk[i-1]==8) str=str.concat(k8);
          if(kk[i-1]==7) str=str.concat(k7);
          if(kk[i-1]==6) str=str.concat(k6);
          if(kk[i-1]==5) str=str.concat(k5);
          if(kk[i-1]==4) str=str.concat(k4);
          if(kk[i-1]==3) str=str.concat(k3);
          if(kk[i-1]==2) str=str.concat(k2);
          if(kk[i-1]==1) str=str.concat(k1);
           
          i--
          
      } else(i--);

      if(i==2)////2
      {
          if(kk[i-1]==9) str=str.concat(k90);
          if(kk[i-1]==8) str=str.concat(k80);
          if(kk[i-1]==7) str=str.concat(k70);
          if(kk[i-1]==6) str=str.concat(k60);
          if(kk[i-1]==5) str=str.concat(k50);
          if(kk[i-1]==4) str=str.concat(k40);
          if(kk[i-1]==3) str=str.concat(k30);
          if(kk[i-1]==2) str=str.concat(k20);
          if(kk[i-1]==1) 
          { 
            
            if(kk[i-2]==9) str=str.concat(k19);
            if(kk[i-2]==8) str=str.concat(k18);
            if(kk[i-2]==7) str=str.concat(k17);
            if(kk[i-2]==6) str=str.concat(k16);
            if(kk[i-2]==5) str=str.concat(k15);
            if(kk[i-2]==4) str=str.concat(k14);
            if(kk[i-2]==3) str=str.concat(k13);
            if(kk[i-2]==2) str=str.concat(k12);
            if(kk[i-2]==1) str=str.concat(k11);
            if(kk[i-2]==0) str=str.concat(k10);
            return str.join(' ');
          }
 
          i--;
      }
      if(i==1)
      {  
        str=str.concat('hundred')
        if(kk[i-1]==9) str=str.concat(k9);
        if(kk[i-1]==8) str=str.concat(k8);
        if(kk[i-1]==7) str=str.concat(k7);
        if(kk[i-1]==6) str=str.concat(k6);
        if(kk[i-1]==5) str=str.concat(k5);
        if(kk[i-1]==4) str=str.concat(k4);
        if(kk[i-1]==3) str=str.concat(k3);
        if(kk[i-1]==2) str=str.concat(k2);
        if(kk[i-1]==1) str=str.concat(k1);
        
       
          i--;
        return str.reverse().join(' ');
      }
  
*/
}

