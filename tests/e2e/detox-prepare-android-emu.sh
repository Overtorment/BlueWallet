$ANDROID_HOME/tools/bin/sdkmanager "system-images;android-28;default;x86_64"
$ANDROID_HOME/tools/bin/sdkmanager --licenses
$ANDROID_HOME/tools/bin/avdmanager create avd -n Pixel_API_28_AOSP -d pixel --package "system-images;android-28;default;x86_64"