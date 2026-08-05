import glob

old_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74617267597!2d77.94709420067305!3d30.32540979207907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1715612345678!5m2!1sen!2sin'
new_url = 'https://maps.google.com/maps?q=Dehradun,+Uttarakhand,+India&t=&z=11&ie=UTF8&iwloc=&output=embed'

files = glob.glob('app/**/*.tsx', recursive=True)
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if old_url in content:
        content = content.replace(old_url, new_url)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Fixed ' + filepath)
