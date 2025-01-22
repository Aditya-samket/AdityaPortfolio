# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "src/assets/tech"
New-Item -ItemType Directory -Force -Path "src/assets/company"

# Create placeholder images
$images = @(
    "src/assets/backend.png",
    "src/assets/creator.png",
    "src/assets/mobile.png",
    "src/assets/web.png",
    "src/assets/github.png",
    "src/assets/tech/android.png",
    "src/assets/tech/kotlin.png",
    "src/assets/tech/java.png",
    "src/assets/tech/firebase.png",
    "src/assets/tech/css.png",
    "src/assets/tech/docker.png",
    "src/assets/tech/figma.png",
    "src/assets/tech/git.png",
    "src/assets/tech/html.png",
    "src/assets/tech/javascript.png",
    "src/assets/tech/mongodb.png",
    "src/assets/tech/nodejs.png",
    "src/assets/tech/reactjs.png",
    "src/assets/tech/redux.png",
    "src/assets/tech/tailwind.png",
    "src/assets/tech/typescript.png",
    "src/assets/company/meta.png",
    "src/assets/company/shopify.png",
    "src/assets/company/starbucks.png",
    "src/assets/company/tesla.png",
    "src/assets/carrent.png",
    "src/assets/jobit.png",
    "src/assets/tripguide.png"
)

foreach ($image in $images) {
    # Create a 100x100 transparent PNG file
    $content = [byte[]]::new(100 * 100 * 4)
    [System.IO.File]::WriteAllBytes("$pwd/$image", $content)
}
