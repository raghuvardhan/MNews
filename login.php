<?php
	$handle=fopen("registrations.csv","r");

	if(!$_POST["uname"]||!$_POST["pword"]){
		echo "it should not be empty";
		exit(1);
	}
	$success=false;
	while(!(feof($handle)))
	{
		$details=fgetcsv($handle);
		if($details[0]==$_POST["uname"]){
			if($details[3]==$_POST["pword"]){
					$success=true;
			}
		}
	}
	if($success){
		header("Location: home.html");
	}
	else{
	echo "incorrect";
	}
	fclose($handle);
?>