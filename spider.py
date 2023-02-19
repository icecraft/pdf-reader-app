import requests
from hashlib import md5
import urllib.parse as parse
import time

class Ciba(object):
    def gs(self, params):
        value_array = []
        keys = sorted(list(params.keys()))
        for value in keys:
            value_array.append(str(params[value]))
        return md5(('/dictionary/word/query/web' + ''.join(value_array) + '7ece94d9f9c202b0d2ec557dg4r9bc').encode('utf-8')).hexdigest()

    def fetch(self, word):
        headers = {
            'Origin': 'http://www.iciba.com',
            'Referer': 'http://www.iciba.com/',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
           }
        
        params = {'client': 6, 'key': 1000006, 'timestamp': 1676809728411, 'word': word}
        params['signature'] = self.gs(params)

        print(params)


if __name__ == '__main__':
    ss = Ciba()
    ss.fetch('bee')
    
