<?php
$correct_password = '84923432'; // Define the correct password

if (isset($_GET['pw']) && $_GET['pw'] === $correct_password && isset($_GET['yt'])) {
    $file_path = 'yt.txt';
    
    // Check if the form was submitted to update the file content
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['content'])) {
        file_put_contents($file_path, $_POST['content']);
        echo "File updated successfully!";
    } else {
        $content = $_GET['yt']; // Get the new content directly from the URL
        file_put_contents($file_path, $content);
        echo "Content updated via URL.";
    }
} else {
    // Load existing content if no update is done
    $content = file_exists($file_path) ? file_get_contents($file_path) : '';
}
?>

<form method="post">
    <textarea name="content" rows="10" cols="30"><?php echo htmlspecialchars($content); ?></textarea>
    <br>
    <button type="submit">Save Changes</button>
</form>
