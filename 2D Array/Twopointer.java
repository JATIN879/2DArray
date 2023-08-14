import java.util.Scanner;
class  ReverseArray{
    
    static void printArray(int[]arr){
        int n=arr.length;
        for(int i=0;i<n;i++){
            System.out.print(arr[i]);
        }
    }

    
    public static void reverse(int []arr){
        int left=0;
        int right=arr.length-1;
        while(left<right){
            int temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }
        printArray(arr);
       

    }
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the elements");
        for(int i=0;i<arr.length;i++){
              arr[i]=sc.nextInt();
            }
            System.out.println("real:");
            printArray(arr);
            System.out.println();
            System.out.println("reversed:");
            reverse(arr);

            

       

    }
}