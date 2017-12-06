<?php
//terima data input dari user
// $nama=$_POST['nama'];
// $email=$_POST['email'];
// $pesan=$_POST['pesan'];

$name = $email = $pesan = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = test_input($_POST["nama"]);
  $email = test_input($_POST["email"]);
  $pesan = test_input($_POST["pesan"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
//konfigurasi kiriman
$to="layanan@majapahitech.com";
$subjek="Kritik Sarang dari Website";
$from="From: $nama &lt;$email&gt;";

//kirimkan ke email admin
if (@mail($to, $subjek, $pesan, $from)) {
    header('Location: http://www.majapahitech.com/contact/?data=masukan');
} else {
  header('Location: http://www.majapahitech.com/contact/?data=gagal');
}


?>
