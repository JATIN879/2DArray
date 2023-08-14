import java.util.Scanner;

public class RotateMatrix{

    static void PrintMatrix(int[][] matrix ,int r){
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[i].length;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();

        }
    }


    public static void reverse(int[] arr){
        int st=0;
        int end=arr.length-1;
        while(st<end){
            int temp = arr[st];
            arr[st] = arr[end];
            arr[end] = temp;
            st++;
            end--;
           }
        }
    
    
    
    public static int[][] transpose(int [][]matrix,int r,int c){
        for(int i=0; i<c; i++){
            for(int j=i; j<r; j++){
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        return matrix;
    }


    public static void Rotate(int[][] matrix ,int n){
        // s-1 transpose
        // s-2 reverse each row of 1d matrix

        transpose(matrix,n,n);
        for(int i=0; i<n ;i++){
           reverse(matrix[i]);
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
    
    //taking input:
    for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
            matrix[i][j]=sc.nextInt();
        }
    }

   
    System.out.println("Input Matrix");
    PrintMatrix(matrix,r);

    Rotate(matrix,r);

    
    
    System.out.println("Rotated-Matrix:");
    PrintMatrix(matrix,r);

} 
}