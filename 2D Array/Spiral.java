// import java.util.Scanner;
//  class SpiralOrderPrint{

//     static void printArray(int[][] matrix){
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0; j<matrix[i].length;j++){
//               System.out.print(matrix[i][j]+" ");  
//             }
//             System.out.println( );
//         }
//     }



//     public static void SpiralOrder(int [][]matrix,int r,int c){
//          int topRow=0 ,bottomRow=r-1 ,leftCol=0,rightCol=c-1;
//          int TotalEle = 0;
//          while(TotalEle < r*c){
//             //top row -> leftCol to rightCol 
//             for(int j=leftCol; j<=rightCol && TotalEle < r*c; j++){
//                 System.out.print(matrix[topRow][j]+" ");
//                 TotalEle++;
    
//             }
//             // for not repeating Element
//             topRow++;

//             //rightCol -> topRow to BottomRow
//            for(int i=topRow; i<=bottomRow && TotalEle < r*c; i++ ){
//             System.out.print(matrix[i][rightCol]+" ");
//             TotalEle++;
//            }
//            rightCol--;

//             //bottomRow -> rightCol to LeftCol
//            for(int j=rightCol; j>=leftCol && TotalEle < r*c; j--){
//             System.out.print(matrix[bottomRow][j]+" ");
//             TotalEle++;
//            }
//            bottomRow--;

//             //leftCol -> bottomRow to toprow

//             for (int i=bottomRow; i>=topRow && TotalEle < r*c; i--){
//                 System.out.print(matrix[i][leftCol]+" ");
//                 TotalEle++;
//             }
//             leftCol++;
           
//          }
//     }

//     public static void main(String[]args){

//         Scanner sc=new Scanner(System.in);
//         System.out.print("enter no of rows :");
//         int r= sc.nextInt();

//          System.out.print("enter no of cols :");
//         int c= sc.nextInt(); 

//         int[][] matrix = new int[r][c];//total ele= r*c

//         System.out.println("enter "+r*c+" elements");
//         for(int i=0; i<r; i++){
//             for (int j=0; j<c; j++){
//                 matrix[i][j]=sc.nextInt();

//              }
//         }

//         System.out.println("input matrix : ");
//         printArray(matrix);

//         System.out.println("Spiral order : ");
//         SpiralOrder(matrix,r,c);
        
//     }
// }







// GENERATE THE SPIRAL ORDER MATRIX FROM 1 TO N in clockwise direction: 
// import java.util.Scanner;
//  class onetoNSpiralOrderPrint{

//     static void printArray(int[][] matrix){
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0; j<matrix[i].length;j++){
//               System.out.print(matrix[i][j]+" ");  
//             }
//             System.out.println( );
//         }
//     }



//     public static int[][] generateSpiralMatrix(int n){
//         int matrix[][]=new int [n][n];
//          int topRow=0 ,bottomRow=n-1 ,leftCol=0,rightCol=n-1;
//          int curr = 1;

//          while(curr <= n*n){
//             //top row -> leftCol to rightCol 
//             for(int j=leftCol; j<=rightCol && curr <= n*n; j++){
//                matrix[topRow][j] = curr;
//                 curr++;
    
//             }
//             // for not repeating Element
//             topRow++;

//             //rightCol -> topRow to BottomRow
//            for(int i=topRow; i<=bottomRow && curr <= n*n; i++ ){
//             matrix[i][rightCol] = curr;
//             curr++;
//            }
//            rightCol--;

//             //bottomRow -> rightCol to LeftCol
//            for(int j=rightCol; j>=leftCol && curr <= n*n; j--){
//             matrix[bottomRow][j] = curr;
//             curr++;
//            }
//            bottomRow--;

//             //leftCol -> bottomRow to toprow

//             for (int i=bottomRow; i>=topRow && curr <= n*n; i--){
//                 matrix[i][leftCol]  = curr;
//                 curr++;
//             }
//             leftCol++;
           
//          }
//          return matrix;
//     }

//     public static void main(String[]args){

//         Scanner sc=new Scanner(System.in);
//         System.out.print("enter n");
//         int n = sc.nextInt();

//         System.out.println("Spiral order : ");
//         int  matrix[][]=generateSpiralMatrix(n);

//         printArray(matrix);
        
//     }
// }









// GENERATE THE SPIRAL ORDER MATRIX FROM 1 TO N in Anticlockwise direction
import java.util.Scanner;
 class onetoNSpiralOrderPrint{

    static void printArray(int[][] matrix){
        for(int i=0;i<matrix.length;i++){
            for(int j=0; j<matrix[i].length;j++){
              System.out.print(matrix[i][j]+" ");  
            }
            System.out.println( );
        }
    }



    public static int[][] generateSpiralMatrix(int n){
        int matrix[][]=new int [n][n];
         int topRow=0 ,bottomRow=n-1 ,leftCol=0,rightCol=n-1;
         int curr = 1;

         while(curr <= n*n){
            //top row -> leftCol to rightCol 
            for(int i=topRow; i<=bottomRow && curr <= n*n; i++){
               matrix[i][leftCol] = curr;
                curr++;
    
            }
            // for not repeating Element
            leftCol++;

            //rightCol -> topRow to BottomRow
           for(int j=leftCol; j<=rightCol && curr <= n*n; j++ ){
            matrix[bottomRow][j] = curr;
            curr++;
           }
           bottomRow--;

            //bottomRow -> rightCol to LeftCol
           for(int i=bottomRow; i>=topRow && curr <= n*n; i--){
            matrix[i][rightCol] = curr;
            curr++;
           }
           rightCol--;

            //leftCol -> bottomRow to toprow

            for (int j=rightCol; j>=leftCol && curr <= n*n; j--){
                matrix[topRow][j]  = curr;
                curr++;
            }
            topRow++;
           
         }
         return matrix;
    }

    public static void main(String[]args){

        Scanner sc=new Scanner(System.in);
        System.out.print("enter n");
        int n = sc.nextInt();

        System.out.println("Spiral order : ");
        int  matrix[][]=generateSpiralMatrix(n);

        printArray(matrix);
        
    }
}