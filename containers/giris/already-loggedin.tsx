import Link from 'next/link'

const AlreadyLoggedIn = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h4 className="text-header-4">
        Yönetici girişi yapıldı. Aşağıdaki linklerden sayfalara gidebilirsiniz.
      </h4>

      <div className="flex gap-8">
        <Link
          href="/"
          className="underline"
        >
          Anasayfa
        </Link>
        <Link
          href="/yonetim-tablosu"
          className="underline"
        >
          Yönetim Tablosu
        </Link>
      </div>
    </div>
  )
}

export default AlreadyLoggedIn
