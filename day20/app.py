diasAno = int(input())

ano = int(diasAno/365 )
carry = (diasAno%365)
mes = int(carry/30)
dias = (carry%30)
print(f"{ano} ano(s)")
print(f"{mes} mes(es)")
print(f"{dias} dia(s)")

