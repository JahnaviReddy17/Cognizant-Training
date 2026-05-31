import java.sql.*;

public class JDBCConnection {
    public static void main(String[] args) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "password");
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select * from users");
        while (rs.next()) {
            System.out.println(rs.getString(1));
        }
        con.close();
    }
}