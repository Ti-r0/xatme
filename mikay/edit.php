<?php
// Define the correct password
$correct_password = 'mikay123';

// Check if the password parameter matches
if (isset($_GET['pw']) && $_GET['pw'] === $correct_password) {
    $file_path = 'yt.txt';
    
    // Read the content of the file
    $content = file_exists($file_path) ? file_get_contents($file_path) : '';

    // Check for form submission
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['content'])) {
        // Save the new content to the file
        file_put_contents($file_path, $_POST['content']);
        echo "File updated successfully!";
    }
    ?>

    <!-- HTML form for editing -->
    <form method="post">
        <textarea name="content" rows="10" cols="30"><?php echo htmlspecialchars($content); ?></textarea>
        <br>
        <button type="submit">Save Changes</button>
    </form>

    <?php
} else {
    echo "Invalid access.";
}
?>
