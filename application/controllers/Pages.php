<?php
class Pages extends CI_Controller
{
  public function index()
  {
    $data = array(
      'title' => 'Home | Worldnet',
      'view' => 'pages/index',
    );
    $this->load->view('template/layout', $data);
  }

  public function about()
  {
    $data = array(
      'title' => 'About | Worldnet',
      'view' => 'pages/about',
    );
    $this->load->view('template/layout', $data);
  }

  public function services()
  {
    $data = array(
      'title' => 'Services | Worldnet',
      'view' => 'pages/services',
    );
    $this->load->view('template/layout', $data);
  }

  public function portfolio()
  {
    $data = array(
      'title' => 'Portfolio | Worldnet',
      'view' => 'pages/portfolio',
    );
    $this->load->view('template/layout', $data);
  }

  public function contact()
  {
    $data = array(
      'title' => 'Contact | Worldnet',
      'view' => 'pages/contact',
    );
    $this->load->view('template/layout', $data);
  }

  public function submitMail()
  {
    $errorMSG = "";

    if (empty($_POST["name"])) {
      $errorMSG = "Name is required ";
    } else {
      $name = $_POST["name"];
    }

    if (empty($_POST["subject"])) {
      $errorMSG = "Subject is required ";
    } else {
      $subject = $_POST["subject"];
    }

    if (empty($_POST["email"])) {
      $errorMSG = "Email is required ";
    } else {
      $email = $_POST["email"];
    }

    if (empty($_POST["message"])) {
      $errorMSG = "Message is required ";
    } else {
      $message = $_POST["message"];
    }

    $EmailTo = "kimkiragu@gmail.com";
    $Subject = $name + "new message from Worldnet";

    // prepare email body text
    $Body = "";
    $Body .= "Name: ";
    $Body .= $name;
    $Body .= "\n";
    $Body .= "Email: ";
    $Body .= $email;
    $Body .= "\n";
    $Body .= "Subject: ";
    $Body .= $subject;
    $Body .= "\n";
    $Body .= "Message: ";
    $Body .= $message;
    $Body .= "\n";

    // send email
    $success = mail($EmailTo, $Subject, $Body, "From:" . $email);

    // redirect to success page
    if ($success && $errorMSG == "") {
      echo "Successfully sent email. We will get back to you soon.";
    } else {
      if ($errorMSG == "") {
        echo "Something went wrong :(";
      } else {
        echo $errorMSG;
      }
    }
  }
}
