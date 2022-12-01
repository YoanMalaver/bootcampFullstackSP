package Reto;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        //ArrayList de prueba
        List<String> supplierNames = new ArrayList<String>();
        supplierNames.add("0881058357");
        supplierNames.add("0858033410");
        supplierNames.add("0801322636");
        supplierNames.add("126");
        supplierNames.add("240");
        //String de prueba del metodo
        String cadenaP =  "258";

        System.out.println(checkList(generateNumber("B"), supplierNames));
        //Imprimo el Múmero aleatorio generado
        System.out.println(generateNumber("B"));
    }

    private static String generateNumber(String n) {
        String A = "54";
        String B = "08";
        String arrayToString = "";
        String[] numeros = new String[8];

        //genero los 8 numeros faltantes y los inserto en el array como valores de tipo texto
        for(int x = 0; x < numeros.length;x++) {
            numeros[x] = String.valueOf((int) Math.floor((Math.random()*9)));
        }

        if(n == "A") {
            //paso el array a texto con la funcion String.join recive dos parametros el separdor y el array de String
            arrayToString = A + String.join("", numeros);
        } else if (n == "B") {
            //paso el array a texto con la funcion String.join recive dos parametros el separdor y el array de String
            arrayToString = B + String.join("", numeros);
        }

        return arrayToString;
    }

    public static boolean checkList(String stringChar, List<String> list){
        boolean VF = false;
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i) == stringChar){
                VF = true;
            }
        }
        return VF;
    }

}
