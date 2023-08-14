

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
//             for(int i=topRow; i<=bottomRow && curr <= n*n; i++){
//                matrix[i][leftCol] = curr;
//                 curr++;
    
//             }
//             // for not repeating Element
//             leftCol++;

//             //rightCol -> topRow to BottomRow
//            for(int j=leftCol; j<=rightCol && curr <= n*n; j++ ){
//             matrix[bottomRow][j] = curr;
//             curr++;
//            }
//            bottomRow--;

//             //bottomRow -> rightCol to LeftCol
//            for(int i=bottomRow; i>=topRow && curr <= n*n; i--){
//             matrix[i][rightCol] = curr;
//             curr++;
//            }
//            rightCol--;

//             //leftCol -> bottomRow to toprow

//             for (int j=rightCol; j>=leftCol && curr <= n*n; j--){
//                 matrix[topRow][j]  = curr;
//                 curr++;
//             }
//             topRow++;
           
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