import java.util.Scanner;

public class Transpose{

    static void PrintMatrix(int[][] matrix){
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[i].length;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();

        }
    }

    // static int[][] FindTranspose(int[][]matrix,int r,int c){
    //      int ans[][] = new int[c][r];
    //      for(int i=0; i<c; i++){
    //         for(int j=0; j<r; j++){
    //           ans[i][j] = matrix[j][i];
    //         }
    //      } 
    //      return ans;

    // }





//WITHOUT USING EXTRA SPACE:
       static void TransposeInplace(int[][]matrix,int r,int c){
        for(int i=0; i<c; i++){
            //  not repeating swaps diagonally 
            for(int j=i; j<r; j++){
              int temp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i]=temp;
            }
         } 
    }


    
public static void main(String[]args){

    Scanner sc=new Scanner(System.in);
    System.out.print("enter no of rows & cols of matrix 1:");
    int r= sc.nextInt();
    int c=sc.nextInt();
    int matrix[][]=new int[r][c];
    int totalElements=r*c;
    System.out.println("enter "+ totalElements+ " values");
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            matrix[i][j]=sc.nextInt();
        }
    }

   
    System.out.println("Input Matrix");
    PrintMatrix(matrix);
    System.out.println("Transpose matrix");
    // int[][]ans = FindTranspose(matrix,r,c);
    // PrintMatrix(ans);
    System.out.println("tranpose Matrix:");
    TransposeInplace(matrix,r,c);
    PrintMatrix(matrix);
}
}

  