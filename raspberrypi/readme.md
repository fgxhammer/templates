# Raspberry headless setup

*Create ssh file in /Volumes/boot
- touch /Volumes/boot/ssh

*Create wlan file wpa_supplicant.conf

country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="NETWORK-NAME"
    psk="NETWORK-PASSWORD"
}

- touch /Volumes/boot/wpa_supplicant.conf
